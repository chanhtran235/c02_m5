
export  let studentList = [
    {
        id:"1",
        name:"chánh",
        gender: true,
        subject: ["JS","Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    },
    {
        id:"2",
        name:"Hiền",
        gender: false,
        subject: ["JS","Java"],
        classCG: {
            id: "2",
            name: "C03"
        }
    }
]
export function getAll(){
    // call API
    return studentList;
}
export function addNew(student){
    studentList.push(student);
}
export function deleteById(id){
    studentList = studentList.filter(s=>s.id!==id);
}

export function findById(id){
    return studentList.find(e=>id==e.id);
}