interface Category {
    id: number;
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

interface Pet {
    id: number;
    name: string;
    category: Category;
    photoUrls: string[];
    tags: Tag[];
    status: string;
}

async function fetchPets(): Promise<void> {
    const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
        }

        const data: Pet[] = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
}

fetchPets();
