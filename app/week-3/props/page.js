import StudentComp from "./student-component";
import StudentObjComp from "./student-obj-component";


export default function PropsPage(){

    let studentOne ={
        studentName: "Joe",
        studentAge: 25,
        hasGraduated: false,
        schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB",
        },
    };

    let studentTwo = {
        studentName: "Alice",
        studentAge:23,
        address: {
            city: "Edmonton",
            province: "AB",
        }
    }

    return(
        <main className="p-5">
            
            <StudentComp
            sName={studentOne.studentName}
            sAge={studentOne.studentAge}
            sCity={studentOne.address.city}
            sProvince={studentOne.address.province}
            />
            <StudentObjComp studentObj={studentOne}/>
            <StudentObjComp studentObj={studentTwo}/>
            <StudentComp sName="Kevin" sAge="28" sCity="Lethbridge" sProvince="AB" />
        </main>
    );
}