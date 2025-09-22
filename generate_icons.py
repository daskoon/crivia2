from PIL import Image
import os

# Get the script's directory
script_dir = os.path.dirname(os.path.abspath(__file__))

# Create icons directory if it doesn't exist
icons_dir = os.path.join(script_dir, 'icons')
if not os.path.exists(icons_dir):
    os.makedirs(icons_dir)

# Sizes needed for the PWA
sizes = [512, 384, 192, 152, 144, 128, 96, 72]  # Added 128

def generate_icons(source_path):
    try:
        # Open the source image
        img = Image.open(source_path)

        # Convert to RGBA if not already
        if img.mode != 'RGBA':
            img = img.convert('RGBA')

        # Generate each size
        for size in sizes:
            # Resize the image
            resized = img.resize((size, size), Image.Resampling.LANCZOS)

            # Save the resized image
            output_path = os.path.join(icons_dir, f'icon-{size}x{size}.png')
            resized.save(output_path, 'PNG', quality=95)
            print(f'Generated {output_path}')

    except Exception as e:
        print(f'Error: {str(e)}')
        return False
    return True

if __name__ == '__main__':
    source_path = os.path.join(script_dir, 'generated_image.png')
    if os.path.exists(source_path):
        generate_icons(source_path)
    else:
        print(f'Please ensure the image exists at: {source_path}')
