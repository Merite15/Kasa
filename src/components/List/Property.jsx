import { Card } from "@/components/Card";

export const ListProperty = ({ logements }) => {
    return (
        <>
            {logements.map((logement) => {
                return (
                    <Card key={`${logement.id}`} logement={logement} />
                )
            })}
        </>
    )
}