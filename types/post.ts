export interface Post {
  contents: [{
    id: string;
    url?: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  }];
}
