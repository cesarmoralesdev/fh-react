import type { FC } from "react";

interface Props {
    title: string;
    searches?: string[];
    onTermClicked: (term: string) => void;
}
export const PreviousSearches: FC<Props> = ({ title, searches, onTermClicked }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {searches?.map((search, index) => (
                    <li key={index} onClick={() => onTermClicked(search)}>{search}</li>
                ))}
            </ul>
        </div>
    )
}
