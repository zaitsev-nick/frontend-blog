import {
  TelegramIcon,
  TelegramShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  MailruIcon,
  MailruShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  TwitterShareButton,
  XIcon,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WhatsappIcon,
  WhatsappShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
} from 'react-share';

type ShareButtonsProps = {
  shareUrl: string;
  title: string;
  image: string;
};

export default function ShareButtons(props: ShareButtonsProps) {
  const { shareUrl, title, image } = props;

return (
  <div>
    <TelegramShareButton url={shareUrl} title={title} className='mr-2'>
      <TelegramIcon size={30} round iconFillColor='white' />
    </TelegramShareButton>
    <FacebookShareButton url={shareUrl}  className='mr-2'>
      <FacebookIcon size={30} round iconFillColor='white' />
    </FacebookShareButton>
    <LinkedinShareButton url={shareUrl} title={title}  className='mr-2'>
      <LinkedinIcon size={30} round iconFillColor='white' />
    </LinkedinShareButton>
    <MailruShareButton url={shareUrl} title={title}  className='mr-2'>
      <MailruIcon size={30} round iconFillColor='white' />
    </MailruShareButton>
    <PinterestShareButton  className='mr-2' url={shareUrl} media={image}>
      <PinterestIcon size={30} round iconFillColor='white' />
    </PinterestShareButton>
    <VKShareButton  className='mr-2' url={shareUrl} title={title}>
      <VKIcon size={30} round iconFillColor='white' />
    </VKShareButton>
    <ViberShareButton  className='mr-2'  url={shareUrl} title={title}>
      <ViberIcon size={30} round iconFillColor='white' />
    </ViberShareButton>
    <TwitterShareButton  className='mr-2' url={shareUrl} title={title}>
      <XIcon size={30} round iconFillColor='white' />
    </TwitterShareButton>
    <WhatsappShareButton  className='mr-2'  url={shareUrl} title={title}>
      <WhatsappIcon size={30} round iconFillColor='white' />
    </WhatsappShareButton>
    <TumblrShareButton  className='mr-2' url={shareUrl} title={title}>
      <TumblrIcon size={30} round iconFillColor='white' />
    </TumblrShareButton>
  </div>
  )
}