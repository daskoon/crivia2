from PIL import Image
import os

# Get the script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))

# Android mipmap sizes
mipmap_sizes = {
    'xxxhdpi': 192,
    'xxhdpi': 144,
    'xhdpi': 96,
    'hdpi': 72,
    'mdpi': 48
}

def generate_mipmaps(source_path):
    try:
        # Open the source image
        img = Image.open(source_path)

        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')

        # Generate for each mipmap density
        for density, size in mipmap_sizes.items():
            # Create mipmap directory if it doesn't exist
            mipmap_dir = os.path.join(script_dir, 'app', 'src', 'main', 'res', f'mipmap-{density}')
            os.makedirs(mipmap_dir, exist_ok=True)

            # Generate regular icon
            resized = img.resize((size, size), Image.Resampling.LANCZOS)
            launcher_path = os.path.join(mipmap_dir, 'ic_launcher.png')
            resized.save(launcher_path, 'PNG', quality=95)
            print(f'Generated {launcher_path}')

            # Generate round icon (same size, just with circular mask)
            # For this simple version, we'll just use the same icon
            round_path = os.path.join(mipmap_dir, 'ic_launcher_round.png')
            resized.save(round_path, 'PNG', quality=95)
            print(f'Generated {round_path}')

    except Exception as e:
        print(f'Error: {str(e)}')
        return False
    return True

if __name__ == '__main__':
    source_path = os.path.join(script_dir, 'generated_image.png')
    if os.path.exists(source_path):
        generate_mipmaps(source_path)
    else:
        print(f'Please ensure the image exists at: {source_path}')
