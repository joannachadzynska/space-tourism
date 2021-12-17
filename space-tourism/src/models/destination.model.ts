export interface Destination {
    description: string;
    distance: string;
    images: Image;
    name: string;
    travel: string;
    path: string;
}

export interface Image {
    png: string;
    webp: string;
}
