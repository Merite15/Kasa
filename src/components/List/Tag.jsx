import { Tag } from "@/components/Tag";

export const ListTag = ({ logement }) => {
    return (
        <>
            {logement.tags?.map((tag, i) => {

                return (
                    <Tag key={`${i}-${tag.trim()}`} name={tag} />
                )
            })}
        </>
    )
}