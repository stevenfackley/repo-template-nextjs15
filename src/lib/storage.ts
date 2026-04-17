import { S3Client } from "@aws-sdk/client-s3";

let cached: { client: S3Client; bucket: string } | null = null;

export function getStorage() {
  if (cached) return cached;

  const endpoint = process.env.S3_ENDPOINT;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
  const bucket = process.env.S3_BUCKET;

  if (!endpoint || !accessKeyId || !secretAccessKey || !bucket) {
    throw new Error("S3 env not configured (S3_ENDPOINT/S3_ACCESS_KEY_ID/S3_SECRET_ACCESS_KEY/S3_BUCKET)");
  }

  const client = new S3Client({
    endpoint,
    region: process.env.S3_REGION ?? "auto",
    credentials: { accessKeyId, secretAccessKey },
    forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
  });

  cached = { client, bucket };
  return cached;
}

export const S3_PUBLIC_BASE_URL = process.env.S3_PUBLIC_BASE_URL ?? "";
