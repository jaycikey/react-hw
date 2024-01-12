import { Mailbox } from './MailBox';
import { Product } from './Product';
import { BookList } from './BookList';
import { Card } from './Card';
import { TitleName } from './TitleName';

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
];

export const App = () => {
  return (
    <div>
      <TitleName text="Best selling" />

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <TitleName text="Mail Box" />
      <Mailbox username="Alex" messages="Test!" />
      <TitleName text="Books of the week" />
      <BookList books={favouriteBooks} />

      <TitleName text="Card children" />
      <Card>
        <h3>Card title</h3>
        <p>Text between opening and closing tag</p>
      </Card>
    </div>
  );
};
