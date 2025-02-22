export class Utils {
    static hideNavbar(pathname: string) {
        return pathname === "/";
    }
    
    static getAssetPath(assetName : string) : string {
        if (import.meta.env.DEV) {
            return `public/assets/${assetName}`;
        }
        else if (import.meta.env.PROD) {
            return `assets/${assetName}`;
        }

        return '';
    }
}