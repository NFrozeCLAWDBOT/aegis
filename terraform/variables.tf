variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "eu-west-2"
}

variable "bucket_name" {
  description = "S3 bucket name (must match domain)"
  type        = string
  default     = "aegis.nfroze.co.uk"
}
