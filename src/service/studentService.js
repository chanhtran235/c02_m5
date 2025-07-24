
export  let studentList = [
    {
        id:"1",
        name:"chánh"
    },
    {
        id:"2",
        name:"chánh"
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