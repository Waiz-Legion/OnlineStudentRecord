import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import swal from 'sweetalert';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [pnum, setPnum] = useState('');
    const [panum, setPanum] = useState('');
    const [jdate, setJdate] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === 'pnum'){
            setPnum(value)
        }else if(name === 'panum'){
            setPanum(value)
        }else if(name === 'jdate'){
            setJdate(value)
        }
        else{
            setRemarks(value)
        }


    }

    const handleSave = (e) => {
        var x = document.myForm.taskname?.value;
        if(x === ''){
            alert("Name cannot be empty!!!")
            return false;
        }
        else{
            e.preventDefault()
            let taskObj = {}
            taskObj["Name"] = taskName
            taskObj["Pnum"] = pnum
            taskObj["Panum"] = panum
            taskObj["Jdate"] = jdate
            taskObj["Remarks"] = remarks
            save(taskObj)
            swal("Success!", "Record is added.", "success");
            setTimeout (function(){window.location.reload()}, 1000)
        }
        

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Record</ModalHeader>
            <ModalBody>
            
                <div className = "form-group">
                    <form id = "myform" name = "myForm" onSubmit={handleSave}>
                        <label><b>Name</b></label>
                        <input type="text" maxlength = '25' placeholder = '25 words limit...' className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" required/>
                        <label><b>Personal Contact</b></label>
                        <input type="text"  maxlength = "10" minlength = "10" placeholder = 'Enter 10 digits number...' className = "form-control" value = {pnum} onChange = {handleChange} name = "pnum" required/>
                        <label><b>Parents Contact</b></label>
                        <input type="text" minlength = '10' maxlength = '10' placeholder = 'Enter 10 digits number...' className = "form-control" value = {panum} onChange = {handleChange} name = "panum"/>
                        <label><b>Joining Date</b></label>
                        <input type="date" className = "form-control" value = {jdate} onChange = {handleChange} name = "jdate"/>
                        
                        <div className = "form-group">
                            <label><b>Remarks</b></label>
                            <textarea maxlength = '70' placeholder = '70 words limit...' rows = "5" className = "form-control" value = {remarks} onChange = {handleChange} name = "remarks"></textarea>
                        </div>
                        <Button type = "submit" color="primary" className = "mt-2">Add Record<i className = "fa fa-plus m-2"></i></Button>{' '}
                        <Button color="secondary" onClick={toggle} className = "mt-2">Cancel<i className = "fad fa-window-close m-2"></i></Button>
                    </form>
                </div>
                    
                
            </ModalBody>
      </Modal>
    );
};

export default CreateTaskPopup;