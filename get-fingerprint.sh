#!/bin/bash

echo "======================================"
echo "Certificate Fingerprint Extractor"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Choose an option:${NC}"
echo "1. Extract from APK file"
echo "2. Extract from debug keystore"
echo "3. Extract from release keystore"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        read -p "Enter the path to your APK file: " apk_path
        if [ -f "$apk_path" ]; then
            echo ""
            echo -e "${GREEN}Extracting certificate from APK...${NC}"
            echo ""
            keytool -printcert -jarfile "$apk_path" 2>&1 | grep -A2 "SHA256:"
            echo ""
            echo -e "${YELLOW}Copy the SHA256 fingerprint above (with colons)${NC}"
        else
            echo -e "${RED}Error: APK file not found at $apk_path${NC}"
        fi
        ;;
    2)
        keystore_path="$HOME/.android/debug.keystore"
        if [ -f "$keystore_path" ]; then
            echo ""
            echo -e "${GREEN}Extracting from debug keystore...${NC}"
            echo ""
            keytool -list -v -keystore "$keystore_path" -alias androiddebugkey -storepass android -keypass android 2>&1 | grep -A1 "SHA256:"
            echo ""
            echo -e "${YELLOW}Copy the SHA256 fingerprint above (with colons)${NC}"
        else
            echo -e "${RED}Error: Debug keystore not found at $keystore_path${NC}"
        fi
        ;;
    3)
        read -p "Enter the path to your keystore file: " keystore_path
        read -p "Enter the keystore alias: " alias_name
        if [ -f "$keystore_path" ]; then
            echo ""
            echo -e "${GREEN}Extracting from release keystore...${NC}"
            echo ""
            keytool -list -v -keystore "$keystore_path" -alias "$alias_name" 2>&1 | grep -A1 "SHA256:"
            echo ""
            echo -e "${YELLOW}Copy the SHA256 fingerprint above (with colons)${NC}"
        else
            echo -e "${RED}Error: Keystore file not found at $keystore_path${NC}"
        fi
        ;;
    *)
        echo -e "${RED}Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}======================================"
echo "Next Steps:"
echo "======================================"
echo "${NC}"
echo "1. Copy the SHA256 fingerprint shown above"
echo "2. Update the assetlinks.json file with this fingerprint"
echo "3. Upload assetlinks.json to: https://crivia2.vercel.app/.well-known/assetlinks.json"
echo "4. Rebuild and reinstall your app"
echo ""
