#!/bin/bash

# Configuration
ASSETS_DIR="public/assets"
QUALITY_HERO=80
QUALITY_GALLERY=75
WIDTH_HERO=1920
WIDTH_GALLERY=1200

# Function to convert images to optimized JPG
convert_to_jpg() {
  find "$ASSETS_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) | while read -r img; do
    dir=$(dirname "$img")
    filename=$(basename "$img")
    name="${filename%.*}"
    # We will use .jpg as the universal extension for optimized assets
    output="$dir/$name.jpg"
    
    # Determine the target width based on filename
    if [[ "$filename" == *"CAPA"* ]] || [[ "$filename" == *"hero"* ]] || [[ "$filename" == *"IMG_1160"* ]]; then
      width=$WIDTH_HERO
      quality=$QUALITY_HERO
    else
      width=$WIDTH_GALLERY
      quality=$QUALITY_GALLERY
    fi
    
    echo "Optimizing: $filename -> $name.jpg (Width: $width)"
    
    # Run sips conversion
    # -s format jpeg: set output format
    # -s formatOptions ${quality}: set compression quality
    # --resampleWidth ${width}: resize while maintaining aspect ratio
    sips -s format jpeg -s formatOptions ${quality} --resampleWidth ${width} "$img" --out "$output"
    
  done
}

convert_to_jpg

echo "✨ Asset optimization complete (JPG Target)!"
