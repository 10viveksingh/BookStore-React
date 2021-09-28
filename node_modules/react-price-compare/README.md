# React Price Compare

Easily create a pricing page featuring side by side plan overviews and detailed plan comparisions

### Table of Contents
- [Getting Started](#getting-started)
- [Featured Price Plan Comparisons](#featured-price-plan-comparison)
- [Detailed Pricing Comparison](#detailed-pricing-comparison)
- [Creating Plans](#creating-plans)


## Getting Started

To install **React Price Compare**, simply run the following:
```bash
  $ yarn add react-price-compare
  # or if you use npm
  $ npm install react-price-compare --save
```


## Featured Price Plan Comparisions

The `<FeaturedPricePlans />` React component compares up to 6 plans horizontally (vertically on mobile). 


## Detailed Pricing Comparisions

The `<DetailedPricing />` component displays a table comparing all the details for each plan side by side so customers can decide the best option to suit
their needs.


## Creating Plans

To use any of these React components, your project will need to have an object created for each pricing plan offered. 
You will pass `DetailedPricing` or `FeaturedPricePlans` an array of plan objects. To assist, we've included a `Plan` 
class that helps create these objects, however you can just as easily use object literals (POJOs), it's up to you.

Each pricing plan you want to display should at a minimum follow this schema:
```json
{
  "id: '{ String | Number }',
  "name": '{ String }',
  "price": '{ String | Number }',
  "details": '{ Array<PlanDetail> }`,
  "featuredItems": '{ Array<String|Feature> }`,
}
```
Featured items, `Feature` should be either a string/react element describing the feature or an object with string values for `{ className, color, icon }`.
Featured items appear in the `FeaturedPricePans` as list items with optional icons next to them. 