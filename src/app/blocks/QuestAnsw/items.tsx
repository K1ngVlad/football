interface Item {
  header: string;
  content: string;
}

type Items = Array<Item>;

const items: Items = [
  {
    header: 'Как у вас дела?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
  },
  {
    header: 'Отлично?',
    content: 'Quisque eget luctus mi, vehicula mollis lorem...',
  },
  {
    header: 'Круто!',
    content: 'Suspendisse massa risus, pretium id interdum in...',
  },
];

export { items };
