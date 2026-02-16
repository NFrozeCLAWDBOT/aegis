import type { Obligation } from "@/types";

export function findCrossReferenceGroups(
  obligations: Obligation[]
): Obligation[][] {
  const idSet = new Set(obligations.map((o) => o.id));
  const parent = new Map<string, string>();

  // Initialize each obligation as its own parent
  for (const o of obligations) {
    parent.set(o.id, o.id);
  }

  function find(id: string): string {
    let root = id;
    while (parent.get(root) !== root) {
      root = parent.get(root)!;
    }
    // Path compression
    let current = id;
    while (current !== root) {
      const next = parent.get(current)!;
      parent.set(current, root);
      current = next;
    }
    return root;
  }

  function union(a: string, b: string) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
      parent.set(rootA, rootB);
    }
  }

  // Union obligations that cross-reference each other
  for (const o of obligations) {
    for (const refId of o.crossReferences) {
      if (idSet.has(refId)) {
        union(o.id, refId);
      }
    }
  }

  // Group by root
  const groups = new Map<string, Obligation[]>();
  for (const o of obligations) {
    const root = find(o.id);
    if (!groups.has(root)) {
      groups.set(root, []);
    }
    groups.get(root)!.push(o);
  }

  // Return only groups with 2+ members
  return Array.from(groups.values()).filter((group) => group.length >= 2);
}
