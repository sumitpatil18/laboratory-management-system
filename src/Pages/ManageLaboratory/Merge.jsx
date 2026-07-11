import ManageLaboratory from './ManageLaboratory'
import Sidebar from '../../Components/Sidebar/Sidebar'

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