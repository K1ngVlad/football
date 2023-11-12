import vkIcon from '@/assets/svg/vk.svg';
import telegramIcon from '@/assets/svg/telegram.svg';
import whatsappIcon from '@/assets/svg/whatsapp.svg';

interface PageLink {
  text: string;
  href: string;
}

type PageLinks = Array<PageLink>;

const pageLinks: PageLinks = [
  {
    text: 'Главная',
    href: '/',
  },
  {
    text: 'О нас',
    href: '/about',
  },
  {
    text: 'Новости',
    href: '/news',
  },
  {
    text: 'Тренера',
    href: '/trainers',
  },
  {
    text: 'Контакты',
    href: '/contact',
  },
];

interface SocLink {
  text: string;
  href: string;
  image: string;
}

type SocLinks = Array<SocLink>;

const socLinks: SocLinks = [
  {
    text: 'Связаться через Вконтакте',
    href: 'https://vk.com/kingvlad3008',
    image: vkIcon,
  },
  {
    text: 'Связаться через Телеграм',
    href: 'https://t.me/KingVlad3008',
    image: telegramIcon,
  },
  {
    text: 'Связаться через Ватсапп',
    href: 'https://wa.me/79879837901',
    image: whatsappIcon,
  },
];

export { pageLinks, socLinks };
