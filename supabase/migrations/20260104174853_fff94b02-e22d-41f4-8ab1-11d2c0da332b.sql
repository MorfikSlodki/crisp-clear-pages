-- Make the bucket public so images can be displayed
UPDATE storage.buckets SET public = true WHERE id = 'zdjecia';

-- Add policy to allow public read access to files
CREATE POLICY "Public read access for zdjecia bucket"
ON storage.objects
FOR SELECT
USING (bucket_id = 'zdjecia');