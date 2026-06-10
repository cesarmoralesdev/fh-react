import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"

interface Props {
    totalPages: number
}

export const CustomPagination = ({ totalPages }: Props) => {
    const page:number = 2;
    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled={page === 1}>
                <ChevronLeft className="h-4 w-4" />
                Anterior
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
                <Button variant={
                    page === index + 1 ? 'default' : 'outline'
                } disabled={page === totalPages} size="sm">
                    { index + 1 }
                </Button>
            ))}

            <Button variant="outline" size="sm">
                2
            </Button>
            <Button variant="outline" size="sm">
                3
            </Button>
            <Button variant="ghost" size="sm" disabled>
                <MoreHorizontal className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm">
                Siguiente
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}

