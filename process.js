var process =
[
    {
        header: {
            process_id: "0",
            name: "De venda à entrega",
            description: "Diagrama 1",
            author: "Luciane Meconi",
        },
        steps:[
            {
                id: "11ca8623-cd75-4890-8665-50d172b5b282",
                name: "Pedido de venda recebido",
                boa: false
            },
            {
                id: "23ac52e2-5a61-40ea-8e34-9eeb20af28c8",
                name: "Cliente informado",
                boa: false
            },
            {
                id: "bff08239-f551-4017-b6dd-c8cb413a132c",
                name: "Produto entregue",
                boa: false
            },
            {
                id: "b57b2a38-3333-4ea6-9fa5-687aac337ea2",
                name: "Analisar pedido",
                boa: false
            },
            {
                id: "3a43aab3-eb9b-4211-99cd-9fecd7462ead",
                name: "Analisar crédito",
                boa: true
            },
            {
                id: "3861adab-eb8b-442d-8e65-3b3bf1336cc8",
                name: "Informar ao cliente",
                boa: false
            },
            {
                id: "8679fa08-67db-4048-bd75-5a6be5301b0a",
                name: "Separar produto",
                boa: false
            },
            {
                id: "d76add28-fcc1-468a-977e-1d952601a298",
                name: "Empacotar produto",
                boa: false
            },
            {
                id: "3786fd12-272c-461f-ad27-fbec1abc6ca8",
                name: "Entregar produto",
                boa: true
            }
        ]
    },
    {
        header: {
            process_id: "1",
            name: "Compras",
            description: "Diagrama 1",
            author: "Luciane Meconi",
        },
        steps:[
            {
                id: "99162613-3357-4bc7-a04f-daca63f3102e",
                name: "Comprar em Dinheiro",
                boa: false
            },
            {
                id: "252c07d1-2d2b-441c-8dbf-ce77a52fb640",
                name: "Buscar Banco",
                boa: true
            },
            {
                id: "e492c429-80fa-4ee3-b7f3-9e52e79a56ab",
                name: "Solicitar Crédito",
                boa: true
            },
            {
                id: "0a2636bb-d9cb-41f5-9e5f-792535cd7c4b",
                name: "Comprar via Crédito",
                boa: false
            },
            {
                id: "36ce1fba-0ad7-49f2-8bd8-34ec13d082b3",
                name: "Declinar Compra",
                boa: false
            },
        ]
    },
    {
        header: {
            process_id: "2",
            name: "Modelo Saúde",
            description: "Diagrama 1",
            author: "Luciane Meconi",
        },
        steps:[
            {
                id: "003f940c-8d26-4edc-aa4b-e82633a8b4d5",
                name: "Procurar atendimento médico",
                boa: false
            },
            {
                id: "8b95a023-a7a4-4ddd-a028-68966b3901b9",
                name: "Realizar consulta",
                boa: false
            },
            {
                id: "b5141941-7e3e-45e0-be38-28f1d9db70f4",
                name: "Nível Hospitalar",
                boa: false
            },
            {
                id: "5554b605-dde1-4d84-8ef7-f142550b4209",
                name: "Nível Ambulatório",
                boa: false
            },
            {
                id: "37f44bd3-1c89-411f-87d0-93e886103262",
                name: "Buscar Laboratório",
                boa: true
            },
            {
                id: "dafc0e9b-63be-427e-bf09-bcf3211ecc74",
                name: "Analisar resultado",
                boa: false
            },

        ]
    },
]
