import { useEffect, useState } from "react";
import { ListVodCategories } from '../../../wailsjs/go/main/App'
import FloatingListItem from "../../components/FloatingListItem";
import FloatingList from "../../components/FloatingList";
import { models } from "../../../wailsjs/go/models";

export default function LiveStreamsView() {

    const [categories, setCategories] = useState<models.Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<models.Category>()

    useEffect(() => {
        ListVodCategories()
            .then(result => setCategories(result))
            .catch()
    }, [])

    return (
        <FloatingList>
            {
                categories?.map((category, _) => (
                    <FloatingListItem value={category.Name} onClick={() => setSelectedCategory(category)} active={category.Id === selectedCategory?.Id} />
                ))
            }
        </FloatingList>
    )
}