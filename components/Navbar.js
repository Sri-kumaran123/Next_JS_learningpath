import '@/CSS/Nav.css';
import Link from 'next/link';
function NavItem(item){
    return <Link href={item}><li>
        {item}
        </li></Link>
}

export default function Navbar(){

    const items=['Home','3D','About','Details','Contect','Project'];
    return <>
    <div className='Left'>
        <h1>Logo</h1>
    </div>
    <div className='right'>
        <ul>
        {items.map((item)=>{
            return NavItem(item);
        })}
    </ul>
    </div>
    </>
}