import './BreadCrumb.scss';
function BreadCrumb({ categories }: { categories: string[] }) {
    return(
        <div className="breadcrumb">
            {
                categories.map((category, index) => {
                    return (<span key={ index }>
                        {category}
                        { index < categories.length - 1 && ' >' }
                    </span>)
                })
            }
        </div>
    )
}
export default BreadCrumb;