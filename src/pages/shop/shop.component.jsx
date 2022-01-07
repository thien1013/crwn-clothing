import React, { Component } from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
