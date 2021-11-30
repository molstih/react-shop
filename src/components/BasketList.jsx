import { BasketItem } from './BasketItem';
function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Корзина{' '}
                <span className="secondary-content">
                    <i
                        className="material-icons basket-close"
                        onClick={handleBasketShow}
                    >
                        close
                    </i>
                </span>
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Nothing item</li>
            )}
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item secondary-content">
                <button className="btn btn-small">Оформить заказ</button>
            </li>
        </ul>
    );
}

export { BasketList };
