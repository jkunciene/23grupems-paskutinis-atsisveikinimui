import axios from 'axios';

const API_URL = '/api/category';

//gauti visus visu skelbimus
//home page
const getAllCategories = async()=>{
    try {
        const response = await axios.get(API_URL);
        if (response.data !== undefined) {
        return response.data;}
    } catch (error) {
        console.log(error);
    }
}

const categoryService = {
    getAllCategories,

}

export default categoryService