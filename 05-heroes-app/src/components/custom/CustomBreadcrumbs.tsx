import { Link } from "react-router";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from "../ui/breadcrumb"

export interface Breadcrumb {
    label: string
    to: string
}

interface Props {
    currentPage: string
    breadcrumb?: Breadcrumb[]
}

/* Version del profesor */
export const CustomBreadcrumbs = ({ currentPage, breadcrumb = [] }: Props) => {
    return (
        <Breadcrumb className="mt-7 mb-7">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to='/'>Inicio</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumb.map((crumb) => (
                    <div className="flex items-center">
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={crumb.to}>{crumb.label}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </div>
                ))}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className="font-bold">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb >
    )
}

/* Mi version de la tarea */
// import { Link, useLocation } from "react-router";
// import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "../ui/breadcrumb"
// import React from "react";

// export const CustomBreadcrumbs = () => {
//     const { pathname } = useLocation();
//     // const pathname: string = '/heroes/1';
//     const dataBreadcrumbs = pathname.split('/').filter(Boolean);
//     return (
//         <div className="mt-7 mb-7">
//             <Breadcrumb>
//                 <BreadcrumbList>
//                     <BreadcrumbItem>
//                         <Link to="/">Inicio</Link>
//                     </BreadcrumbItem>
//                     {dataBreadcrumbs.length > 0 && <BreadcrumbSeparator />}
//                     {dataBreadcrumbs.map((value: string, index: number) => {
//                         const url = `/${dataBreadcrumbs.slice(0, index + 1).join('/')}`;
//                         const isLast = index === dataBreadcrumbs.length - 1;
//                         return (
//                             <React.Fragment key={url}>
//                                 <BreadcrumbItem>
//                                     {isLast ? (
//                                         <span className="capitalize">{value}</span>
//                                     ) :
//                                         (<Link to={url}>{value}</Link>)
//                                     }
//                                 </BreadcrumbItem>
//                                 {!isLast && <BreadcrumbSeparator />}
//                             </React.Fragment>
//                         );
//                     })}
//                 </BreadcrumbList>
//             </Breadcrumb>
//         </div>
//     )
// }