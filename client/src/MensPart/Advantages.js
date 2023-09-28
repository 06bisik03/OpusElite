import styles from "./Advantages.module.css";
const Advantages = () => {
  return (
    <div className={styles.advantagesContainer}>
      <div className={styles.advantages}>
        <div className={styles.advantage}>
          <div>
          <img class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/464952/aeea76f5a8ae5b3163b0ca9839dad993/01-benefits-pickup-in-store-data.svg/w0.svg" alt="01-benefits_pickup-in-store" aria-hidden="true"/>
          </div>
          <div>PICKUP IN STORE</div>
          <div>
            Purchase online and pick the parcel up at one of our closes shops to
            your residency
          </div>
        </div>
        <div className={styles.advantage}>
          <div>
          <img class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/464956/bdf4a892050709930cf8ce06c6b53be8/02-benefits-reserve-in-store-data.svg/w0.svg" alt="02-benefits_reserve-in-store" aria-hidden="true"/>
          </div>
          <div>RESERVE IN STORE
</div>
          <div>Check the availability online of an item in store. Our staff will reserve it for you</div>
        </div>
        <div className={styles.advantage}>
          <div><img class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/464960/541f99c89db5bbd4d706a9233a84ece8/03-benefits-book-an-appointment-data.svg/w0.svg" alt="03-benefits_book-an-appointment" aria-hidden="true"/></div>
          <div>BOOK AN APPOINTMENT
</div>
          <div>Find the perfect present or create your personalised look with the help of our staff</div>
        </div>
        <div className={styles.advantage}>
          <div><img class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/464964/e5b2ecc9c25483872351d4c50f2841a5/04-benefits-ship-and-return-data.svg/w0.svg" alt="04-benefits_ship-and-return" aria-hidden="true"/></div>
          <div>COMPLIMENTARY SHIPPING AND RETURNS</div>
          <div>Complimentary standard shipping for registered clients and free returns.</div>
        </div>
        <div className={styles.advantage}>
          <div><img alt="_"class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/589810/3ddeead87dc676119f3e099f48967bb9/tailoring-icon-8-23-data.svg/w0.svg" aria-hidden="true"/></div>
          <div>COMPLIMENTARY TAILORING
</div>
          <div>Available in store for all online OpusElite purchases, no matter the item.</div>
        </div>
        <div className={styles.advantage}>
          <div><img class="benefit__picture" src="https://www.armani.com/content/images/cms/ycm/resource/blob/464972/688425769d087460179f4a1410ae9f70/06-benefits-customer-care-data.svg/w0.svg" alt="06-benefits_customer-care" aria-hidden="true"/></div>
          <div>CUSTOMER CARE</div>
          <div>Contact us for anything – we are completely at your service.</div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
