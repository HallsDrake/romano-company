#!/bin/bash

# Configuration
ASSETS_DIR="public/assets"
BACKUP_DIR="assets_backup"
QUALITY_HERO=80
QUALITY_GALLERY=75
WIDTH_HERO=1920
WIDTH_GALLERY=1200

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to convert images to optimized JPG
process_images() {
  find "$ASSETS_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
    dir=$(dirname "$img")
    filename=$(basename "$img")
    extension="${filename##*.}"
    name="${filename%.*}"
    
    # We will use .jpg as the universal extension for optimized assets
    output="$dir/$name.jpg"
    
    # Check if it's already an optimized JPG from a previous run
    # (Optional: skip if output already exists and is newer? 
    # For now, let's re-optimize to ensure everything is uniform)
    
    # Determine the target width based on filename
    if [[ "$filename" == *"CAPA"* ]] || [[ "$filename" == *"hero"* ]] || [[ "$filename" == *"IMG_1160"* ]]; then
      width=$WIDTH_HERO
      quality=$QUALITY_HERO
    else
      width=$WIDTH_GALLERY
      quality=$QUALITY_GALLERY
    fi
    
    echo "Processing: $filename -> $name.jpg"
    
    # Run sips conversion
    sips -s format jpeg -s formatOptions ${quality} --resampleWidth ${width} "$img" --out "$output" > /dev/null 2>&1
    
    # If the original was a PNG, move it to backup to save space in public/ folder
    lowercase_ext=$(echo "$extension" | tr '[:upper:]' '[:lower:]')
    if [[ "$lowercase_ext" == "png" ]] || [[ "$lowercase_ext" == "jpeg" ]]; then
      # Create matching sub-directory in backup
      relative_dir=${dir#"$ASSETS_DIR"}
      target_backup_dir="$BACKUP_DIR$relative_dir"
      mkdir -p "$target_backup_dir"
      
      echo "  Moving original to backup: $target_backup_dir/$filename"
      mv "$img" "$target_backup_dir/"
    fi
    
  done
}

process_images

# Clean up any empty folders in public/assets
find "$ASSETS_DIR" -type d -empty -delete

echo "✨ Asset optimization and cleanup complete!"
echo "Total size of public/assets now:"
du -sh "$ASSETS_DIR"

