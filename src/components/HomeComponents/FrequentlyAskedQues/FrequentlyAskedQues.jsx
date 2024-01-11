import css from './FrequentlyAskedQues.module.css';
import CollapsableCard2 from '../../../utils/Cards/CollapsableCard2/CollapsableCard2'

let FrequentlyAskedQues = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Frequently asked questions</div>
            <div className={css.cards}>
                <CollapsableCard2 title="What will Zomato charge me for creating a page on its platform?" content="Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
                <CollapsableCard2 title="What all documents are required for registering on online ordering?"   content={
    <div>
      Registration for online ordering requires:
      <br />
      a: FSSAI certificate (application no. if FSSAI is not present)
      <br />
      b: PAN Card
      <br />
      c: GST certificate (if applicable)
    </div>
  }
/>
                <CollapsableCard2 title="I have a large fleet of delivery boys, why should I use Zomato’s delivery service?" content="You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction." />
                <CollapsableCard2 title="What happens if the average order value of Zomato orders is very low?" content="Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food." />
            </div>
        </div>
    </div>
}

export default FrequentlyAskedQues;