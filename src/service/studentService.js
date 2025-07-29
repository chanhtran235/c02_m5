import axios from "axios";

export let studentList = [
    {
        id: "1",
        name: "chánh",
        gender: true,
        subject: ["JS", "Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    },
    {
        id: "2",
        name: "Hiền",
        gender: false,
        subject: ["JS", "Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    }
]
const URL = 'http://localhost:3001/students';

export async function getAll() {
    try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await axios.get(URL);
        return response.data;
    } catch (e) {
        console.error('Lỗi gọi API:', e);
        return null;
    }

}

export function addNew(student) {
    studentList.push(student);
}

export async function deleteById(id) {
    try {
        const response = await axios.delete(`${URL}/${id}`);
        return response.status;
    } catch (e) {
        console.error('Lỗi gọi API:', e);
        return e.status;
    }
}

export function findById(id) {
    return studentList.find(e => id == e.id);
}