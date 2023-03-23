export const getThumbnail = (meme: string) =>
  `https://apimeme.com/thumbnail?name=${meme}`;

interface GetMemeProps {
  meme: string;
  topText?: string;
  bottomText?: string;
}
export const getMeme = ({
  meme,
  topText = '',
  bottomText = '',
}: GetMemeProps) =>
  `https://apimeme.com/meme?meme=${meme}&top=${encodeURIComponent(
    topText
  )}&bottom=${encodeURIComponent(bottomText)}`;

export const getTitle = ({ meme }: { meme: string }) => meme.replace(/-/g, ' ');
