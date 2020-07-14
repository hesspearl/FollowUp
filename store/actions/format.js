export const POST_FROM_PAGE_01 = "POST_FROM_PAGE_01";
export const POST_FROM_PAGE_02 = "POST_FROM_PAGE_02";

export const inputsPage1 = (productName, application, spend, important) => {
 return{type : POST_FROM_PAGE_01,
    value : { productName, application, spend, important }}};
;

export const inputsPage2 = (date, picture, observation, necessary) => {

return { type : POST_FROM_PAGE_02,
    value : { date, picture, observation, necessary}}}

    