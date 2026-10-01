const questions = [
  // --- BEGINNER ---
  {
    id: 1, level: 'Beginner',
    code: 'terraform init',
    choices: ['A. It applies all pending changes', 'B. It initialises the working directory and downloads providers', 'C. It creates a new Terraform workspace', 'D. It validates the configuration files'],
    answer: 'B',
  },
  {
    id: 2, level: 'Beginner',
    code: 'terraform plan',
    choices: ['A. It applies changes to infrastructure', 'B. It destroys all managed resources', 'C. It shows what changes will be made without applying them', 'D. It imports existing resources into state'],
    answer: 'C',
  },
  {
    id: 3, level: 'Beginner',
    code: 'variable "region" {\n  default = "us-east-1"\n}',
    choices: ['A. It hard-codes the region to us-east-1 permanently', 'B. It declares a variable with a default value', 'C. It creates an AWS region resource', 'D. It imports the region from the environment'],
    answer: 'B',
  },
  {
    id: 4, level: 'Beginner',
    code: 'output "instance_ip" {\n  value = aws_instance.web.public_ip\n}',
    choices: ['A. It stores the IP in a variable for reuse', 'B. It prints the instance public IP after apply', 'C. It assigns a static IP to the instance', 'D. It creates a DNS record for the IP'],
    answer: 'B',
  },
  {
    id: 5, level: 'Beginner',
    code: 'terraform destroy',
    choices: ['A. It removes only unused resources', 'B. It reverts the last apply', 'C. It destroys all resources managed by the configuration', 'D. It deletes the state file'],
    answer: 'C',
  },
  // --- INTERMEDIATE ---
  {
    id: 6, level: 'Intermediate',
    code: 'resource "aws_s3_bucket" "assets" {\n  bucket = "my-app-assets"\n}',
    choices: ['A. It uploads files to an existing S3 bucket', 'B. It declares an S3 bucket to be created by Terraform', 'C. It imports an existing bucket into state', 'D. It deletes the bucket named my-app-assets'],
    answer: 'B',
  },
  {
    id: 7, level: 'Intermediate',
    code: 'data "aws_ami" "ubuntu" {\n  most_recent = true\n  filter {\n    name   = "name"\n    values = ["ubuntu/images/*"]\n  }\n}',
    choices: ['A. It creates a new Ubuntu AMI', 'B. It reads an existing AMI from AWS without creating anything', 'C. It copies the latest Ubuntu AMI to a new region', 'D. It tags the AMI as most recent'],
    answer: 'B',
  },
  {
    id: 8, level: 'Intermediate',
    code: 'resource "aws_instance" "web" {\n  count = 3\n  ami   = var.ami_id\n}',
    choices: ['A. It creates one instance with 3 CPUs', 'B. It creates 3 identical EC2 instances', 'C. It limits the instance to 3 connections', 'D. It retries creation up to 3 times'],
    answer: 'B',
  },
  {
    id: 9, level: 'Intermediate',
    code: 'terraform workspace new staging',
    choices: ['A. It creates a new Terraform project', 'B. It creates a staging environment using the same config with separate state', 'C. It copies the current state to staging', 'D. It deploys to a staging server'],
    answer: 'B',
  },
  {
    id: 10, level: 'Intermediate',
    code: 'terraform import aws_s3_bucket.logs my-existing-bucket',
    choices: ['A. It creates a new bucket called my-existing-bucket', 'B. It copies files from the bucket into Terraform', 'C. It brings an existing AWS resource under Terraform management', 'D. It exports the bucket configuration to a file'],
    answer: 'C',
  },
  // --- ADVANCED ---
  {
    id: 11, level: 'Advanced',
    code: 'resource "aws_instance" "server" {\n  for_each = var.environments\n  ami      = each.value.ami\n}',
    choices: ['A. It creates one instance for each item in the environments map', 'B. It loops through environments sequentially', 'C. It filters instances by environment type', 'D. It creates a single instance using the first environment'],
    answer: 'A',
  },
  {
    id: 12, level: 'Advanced',
    code: 'terraform {\n  backend "s3" {\n    bucket = "tf-state"\n    key    = "prod/terraform.tfstate"\n  }\n}',
    choices: ['A. It uploads the state file to S3 after each apply', 'B. It stores the Terraform state remotely in S3 for team collaboration', 'C. It backs up the local state to S3 weekly', 'D. It creates an S3 bucket for the project'],
    answer: 'B',
  },
  {
    id: 13, level: 'Advanced',
    code: 'lifecycle {\n  prevent_destroy = true\n}',
    choices: ['A. It prevents the resource from being updated', 'B. It locks the resource so only admins can destroy it', 'C. It causes Terraform to error if the resource would be destroyed', 'D. It creates a backup before destroying'],
    answer: 'C',
  },
  {
    id: 14, level: 'Advanced',
    code: 'module "vpc" {\n  source = "./modules/vpc"\n  cidr   = "10.0.0.0/16"\n}',
    choices: ['A. It imports an existing VPC into state', 'B. It calls a reusable module to create a VPC', 'C. It creates a VPC using the default AWS provider', 'D. It references an output from the VPC resource'],
    answer: 'B',
  },
  {
    id: 15, level: 'Advanced',
    code: 'locals {\n  env    = terraform.workspace\n  prefix = "${local.env}-myapp"\n}',
    choices: ['A. It defines environment variables for the shell', 'B. It sets reusable local values computed from workspace name', 'C. It creates a Terraform variable called prefix', 'D. It outputs the workspace name after apply'],
    answer: 'B',
  },
]

export default questions
