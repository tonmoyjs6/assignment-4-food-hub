

export type orderInput={
    

mealId:string,
quantity:number
}

export type creatOrderItemInput={
    orderId:string;
    items:orderInput[]
}