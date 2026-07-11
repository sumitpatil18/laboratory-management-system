import ManageLaboratory from '../ManageLaboratory/ManageLaboratory'
import Sidebar from '../Sidebar/Sidebar'

export default function Merge(){
    return (
        <>
            <ManageLaboratory
            title="Manage Laboratory"
            subTitle="Manage all registered laboratories."
            />
            <Sidebar/>
        </>
    )
}