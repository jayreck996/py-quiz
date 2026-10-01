const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: `resource "aws_s3_bucket" "video_storage" {
  bucket = "streambox-videos-prod"
}`,
    choices: [
      'A. It deletes the S3 bucket named streambox-videos-prod',
      'B. It declares an S3 bucket resource named streambox-videos-prod',
      'C. It uploads videos to the bucket immediately',
      'D. It raises an error — S3 bucket names cannot contain hyphens',
    ],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: `terraform init`,
    choices: [
      'A. It applies all Terraform changes immediately',
      'B. It initializes the working directory and downloads required providers',
      'C. It destroys all managed infrastructure',
      'D. It validates the Terraform configuration syntax',
    ],
    answer: 'B',
  },
  {
    id: 3, level: 'Beginner',
    code: `terraform plan -out=tfplan`,
    choices: [
      'A. It applies the infrastructure changes',
      'B. It shows what changes Terraform will make and saves the plan to a file',
      'C. It destroys the current infrastructure',
      'D. It imports existing resources into state',
    ],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: `variable "region" {
  description = "AWS region for StreamBox infrastructure"
  default     = "us-east-1"
}`,
    choices: [
      'A. It hard-codes the region to us-east-1 and prevents overrides',
      'B. It declares an input variable with a default value of us-east-1',
      'C. It raises an error — variables must be in a separate file',
      'D. It sets an environment variable on the host',
    ],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: `output "cdn_domain" {
  value = aws_cloudfront_distribution.streambox.domain_name
}`,
    choices: [
      'A. It creates a new CloudFront distribution',
      'B. It exposes the CDN domain name as a Terraform output after apply',
      'C. It raises an error — outputs cannot reference CloudFront',
      'D. It logs the domain to the Terraform state file',
    ],
    answer: 'B',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: `resource "aws_cloudfront_distribution" "streambox" {
  origin {
    domain_name = aws_s3_bucket.video_storage.bucket_regional_domain_name
    origin_id   = "S3-streambox-videos"
  }
  enabled             = true
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-streambox-videos"
    viewer_protocol_policy = "redirect-to-https"
  }
  restrictions { geo_restriction { restriction_type = "none" } }
  viewer_certificate { cloudfront_default_certificate = true }
}`,
    choices: [
      'A. It creates an S3 bucket with CDN caching',
      'B. It creates a CloudFront distribution that serves video content from S3 over HTTPS',
      'C. It raises an error — CloudFront cannot reference S3 directly',
      'D. It configures a load balancer in front of S3',
    ],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: `terraform workspace new staging
terraform workspace select staging`,
    choices: [
      'A. It creates and switches to a separate Terraform state for the staging environment',
      'B. It creates a staging branch in the Git repository',
      'C. It raises an error — workspaces require remote state',
      'D. It copies the production state into a staging directory',
    ],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: `resource "aws_autoscaling_group" "encoder_fleet" {
  min_size         = 2
  max_size         = 20
  desired_capacity = 4
  launch_template {
    id      = aws_launch_template.encoder.id
    version = "$Latest"
  }
}`,
    choices: [
      'A. It creates exactly 4 encoder instances with no scaling',
      'B. It creates an Auto Scaling Group for encoders between 2 and 20 instances',
      'C. It raises an error — desired_capacity must equal min_size',
      'D. It launches encoder instances on-demand only',
    ],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: `data "aws_ami" "encoder_ami" {
  most_recent = true
  owners      = ["self"]
  filter {
    name   = "name"
    values = ["streambox-encoder-*"]
  }
}`,
    choices: [
      'A. It creates a new AMI named streambox-encoder',
      'B. It looks up the most recent custom encoder AMI from the account',
      'C. It raises an error — data sources cannot filter by name',
      'D. It deletes old AMIs matching the filter',
    ],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: `resource "aws_db_instance" "streambox_db" {
  identifier        = "streambox-prod"
  engine            = "postgres"
  engine_version    = "15"
  instance_class    = "db.t3.medium"
  allocated_storage = 100
  username          = var.db_user
  password          = var.db_password
  skip_final_snapshot = false
}`,
    choices: [
      'A. It creates an in-memory database instance',
      'B. It provisions a PostgreSQL RDS instance for StreamBox user and content data',
      'C. It raises an error — passwords must be hardcoded in Terraform',
      'D. It deletes the existing database and creates a fresh one',
    ],
    answer: 'B',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: `module "streambox_vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.1.0"

  name = "streambox-prod"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]

  enable_nat_gateway = true
}`,
    choices: [
      'A. It creates a VPC without subnets',
      'B. It uses a community module to provision a VPC with public and private subnets across 3 AZs',
      'C. It raises an error — modules cannot reference external registries',
      'D. It creates the VPC but skips the NAT gateway',
    ],
    answer: 'B',
  },
  {
    id: 12, level: 'Advanced',
    code: `terraform {
  backend "s3" {
    bucket         = "streambox-tfstate"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "streambox-tfstate-lock"
    encrypt        = true
  }
}`,
    choices: [
      'A. It stores Terraform state locally and backs it up to S3',
      'B. It configures remote state in S3 with DynamoDB locking and encryption',
      'C. It raises an error — S3 backends require IAM roles',
      'D. It creates the S3 bucket and DynamoDB table automatically',
    ],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: `resource "aws_wafv2_web_acl" "streambox_waf" {
  name  = "streambox-waf"
  scope = "CLOUDFRONT"

  default_action { allow {} }

  rule {
    name     = "RateLimitRule"
    priority = 1
    action   { block {} }
    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }
    visibility_config {
      sampled_requests_enabled   = true
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimitRule"
    }
  }
  visibility_config {
    sampled_requests_enabled   = true
    cloudwatch_metrics_enabled = true
    metric_name                = "streambox-waf"
  }
}`,
    choices: [
      'A. It creates a firewall that blocks all traffic by default',
      'B. It creates a WAF rule that blocks IPs making more than 2000 requests',
      'C. It raises an error — WAFv2 cannot be scoped to CloudFront',
      'D. It allows unlimited traffic and only logs requests',
    ],
    answer: 'B',
  },
  {
    id: 14, level: 'Advanced',
    code: `locals {
  common_tags = {
    Project     = "StreamBox"
    Environment = terraform.workspace
    ManagedBy   = "Terraform"
  }
}

resource "aws_s3_bucket" "encoded_videos" {
  bucket = "streambox-encoded-\${terraform.workspace}"
  tags   = local.common_tags
}`,
    choices: [
      'A. It creates one bucket shared across all workspaces',
      'B. It creates a workspace-specific bucket with shared tags using locals',
      'C. It raises an error — terraform.workspace cannot be used in resource names',
      'D. It applies tags only to the S3 bucket, not other resources',
    ],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: `resource "aws_lambda_function" "thumbnail_generator" {
  filename         = "thumbnail_generator.zip"
  function_name    = "streambox-thumbnail-gen"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  source_code_hash = filebase64sha256("thumbnail_generator.zip")

  environment {
    variables = {
      BUCKET = aws_s3_bucket.thumbnails.id
    }
  }
}`,
    choices: [
      'A. It triggers the Lambda function immediately on apply',
      'B. It deploys a Lambda for thumbnail generation and only redeploys when the zip changes',
      'C. It raises an error — Lambda must use S3 for deployment packages',
      'D. It creates the IAM role automatically from the arn reference',
    ],
    answer: 'B',
  },
]

export default questions
