const produtos = [
    {
      "identidade": 1,
      "title": "Fjallraven - Mochila Foldsack No. 1, acomoda 15 laptops",
      "preço": 109,95,
      "description": "Sua mochila perfeita para uso diário e caminhadas na floresta. Guarde seu laptop (de até 15 polegadas) na capa acolchoada, seu dia a dia",
      "categoria": "roupas masculinas",
      "imagem": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "avaliação": {
        "taxa": 3,9,
        "contagem": 120
      }
    },
    {
      "identidade": 2,
      "title": "Camisetas masculinas casuais premium slim fit",
      "preço": 22,3,
      "description": "Estilo justo, manga longa raglan contrastante, carcela henley de três botões, tecido leve e macio para uso respirável e confortável. E camisas costuradas sólidas com gola redonda feitas para durabilidade e um ótimo ajuste para uso casual e fãs de beisebol obstinados. A gola redonda estilo Henley inclui uma carcela de três botões.",
      "categoria": "roupas masculinas",
      "imagem": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "avaliação": {
        "taxa": 4.1,
        "contagem": 259
      }
    },
    {
      "identidade": 3,
      "title": "Jaqueta de algodão masculina",
      "preço": 55,99,
      "description": "ótimos casacos para uso externo para primavera/outono/inverno, adequados para muitas ocasiões, como trabalho, caminhadas, acampamentos, escalada em montanha/rocha, ciclismo, viagens ou outras atividades ao ar livre. Boa escolha de presente para você ou seu familiar. Um amor caloroso e sincero para pai, marido ou filho neste dia de ação de graças ou Natal.",
      "categoria": "roupas masculinas",
      "imagem": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "avaliação": {
        "taxa": 4,7,
        "contagem": 500
      }
    },
    {
      "identidade": 4,
      "título": "Casual Slim Fit Masculino",
      "preço": 15,99,
      "description": "A cor pode ser ligeiramente diferente entre a tela e a prática. / Observe que a constituição física varia de pessoa para pessoa, portanto, informações detalhadas sobre o tamanho devem ser revisadas abaixo na descrição do produto.",
      "categoria": "roupas masculinas",
      "imagem": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "avaliação": {
        "taxa": 2.1,
        "contagem": 430
      }
    },
    {
      "identidade": 5,
      "título": "Pulseira de corrente feminina John Hardy Legends Naga Gold & Silver Dragon Station",
      "preço": 695,
      "description": "Da nossa Coleção Legends, o Naga foi inspirado no mítico dragão aquático que protege a pérola do oceano. Use-o virado para dentro para receber amor e abundância, ou para fora para proteção.",
      "categoria": "joias",
      "imagem": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "avaliação": {
        "taxa": 4,6,
        "contagem": 400
      }
    },
    {
      "identidade": 6,
      "título": "Petite Micropave de ouro maciço",
      "preço": 168,
      "description": "Satisfação garantida. Devolva ou troque qualquer pedido em até 30 dias. Projetado e vendido pela Hafeez Center nos Estados Unidos. Satisfação garantida. Devolva ou troque qualquer pedido em até 30 dias.",
      "categoria": "joias",
      "imagem": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "avaliação": {
        "taxa": 3,9,
        "contagem": 70
      }
    },
    {
      "identidade": 7,
      "title": "Princesa banhada a ouro branco",
      "preço": 9,99,
      "description": "Anel de noivado e noivado clássico com diamante solitário criado para ela. Presentes para mimar ainda mais seu amor para noivado, casamento, aniversário, dia dos namorados...",
      "categoria": "joias",
      "imagem": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "avaliação": {
        "taxa": 3,
        "contagem": 400
      }
    },
    {
      "identidade": 8,
      "título": "Coruja perfurada banhada a ouro rosa em aço inoxidável duplo",
      "preço": 10,99,
      "description": "Brincos de alargamento duplo com alargamento de túnel banhados a ouro rosa. Feitos de aço inoxidável 316L",
      "categoria": "joias",
      "imagem": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "avaliação": {
        "taxa": 1,9,
        "contagem": 100
      }
    },
    {
      "identidade": 9,
      "title": "Disco rígido externo portátil WD Elements de 2 TB - USB 3.0",
      "preço": 64,
      "description": "Compatibilidade com USB 3.0 e USB 2.0 Transferências rápidas de dados Melhoram o desempenho do PC Alta capacidade; Compatibilidade Formatado em NTFS para Windows 10, Windows 8.1, Windows 7; A reformatação pode ser necessária para outros sistemas operacionais; A compatibilidade pode variar dependendo da configuração de hardware e do sistema operacional do usuário",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "avaliação": {
        "taxa": 3,3,
        "contagem": 203
      }
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1 TB SSD interno - SATA III 6 Gb/s",
      "preço": 109,
      "description": "Fácil atualização para inicialização, desligamento, carregamento de aplicativos e resposta mais rápidos (em comparação com o disco rígido SATA 2.5 de 5400 RPM; com base em especificações publicadas e testes de benchmarking internos usando pontuações de vantagem do PCMark) Aumenta o desempenho de gravação em rajada, tornando-o ideal para cargas de trabalho típicas de PC O equilíbrio perfeito entre desempenho e confiabilidade Velocidades de leitura/gravação de até 535 MB/s/450 MB/s (com base em testes internos; o desempenho pode variar dependendo da capacidade da unidade, dispositivo host, sistema operacional e aplicativo.)",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "avaliação": {
        "taxa": 2,9,
        "contagem": 470
      }
    },
    {
      "id": 11,
      "título": "Silicon Power 256 GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "preço": 109,
      "description": "3D NAND flash são aplicados para fornecer altas velocidades de transferência Velocidades de transferência notáveis ​​que permitem inicialização mais rápida e melhor desempenho geral do sistema. A avançada Tecnologia de Cache SLC permite aumento de desempenho e maior vida útil Design fino de 7 mm adequado para Ultrabooks e notebooks ultrafinos. Suporta comando TRIM, tecnologia Garbage Collection, RAID e ECC (Error Checking & Correction) para fornecer desempenho otimizado e confiabilidade aprimorada.",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "avaliação": {
        "taxa": 4,8,
        "contagem": 319
      }
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive funciona com o disco rígido externo portátil do Playstation 4",
      "preço": 114,
      "description": "Expanda sua experiência de jogo no PS4, jogue em qualquer lugar, rápido e fácil, configuração elegante com alta capacidade, garantia limitada do fabricante de 3 anos",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "avaliação": {
        "taxa": 4,8,
        "contagem": 400
      }
    },
    {
      "id": 13,
      "título": "Acer SB220Q bi 21,5 polegadas Full HD (1920 x 1080) IPS Ultra-fino",
      "preço": 599,
      "description": "Tela IPS widescreen Full HD (1920 x 1080) de 21,5 polegadas e tecnologia Radeon free Sync. Sem compatibilidade com montagem VESA Taxa de atualização: 75 Hz - Usando porta HDMI Design de quadro zero | ultrafino | Tempo de resposta de 4 ms | Painel IPS Proporção da tela - 16: 9. Cor suportada - 16,7 milhões de cores. Brilho - 250 nits Ângulo de inclinação -5 graus a 15 graus. Ângulo de visão horizontal - 178 graus. Ângulo de visão vertical - 178 graus 75 hertz",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "avaliação": {
        "taxa": 2,9,
        "contagem": 250
      }
    },
    {
      "id": 14,
      "título": "Monitor curvo para jogos Samsung CHG90 de 49 polegadas e 144 Hz (LC49HG90DMNXZA) - Tela super ultralarga QLED",
      "preço": 999,99,
      "description": "MONITOR JOGADOR CURVO SUPER ULTRAWIDE 32:9 DE 49 POLEGADAS com tela dupla de 27 polegadas lado a lado, TECNOLOGIA QUANTUM DOT (QLED), suporte HDR e calibração de fábrica que oferece cores e contraste incrivelmente realistas e precisos. TAXA DE ATUALIZAÇÃO ALTA DE 144 Hz e tempo de resposta ultrarrápido de 1 ms trabalham para eliminar desfoque de movimento, efeitos fantasmas e reduzir o atraso de entrada",
      "categoria": "eletrônicos",
      "imagem": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "avaliação": {
        "taxa": 2,2,
        "contagem": 140
      }
    },
    {
      "id": 15,
      "title": "BIYLACLESEN Jaqueta de snowboard feminina 3 em 1, casacos de inverno",
      "preço": 56,99,
      "description": "Nota: As jaquetas são tamanho padrão dos EUA, escolha o tamanho como seu uso habitual Material: 100% poliéster; Tecido de forro removível: lã quente. Forro funcional removível: agradável à pele, leve e quente. Jaqueta com forro de gola alta, mantém você aquecido em climas frios. Bolsos com zíper: 2 bolsos com zíper para as mãos, 2 bolsos com zíper no peito (o suficiente para guardar cartões ou chaves) e 1 bolso oculto dentro. Bolsos com zíper para as mãos e bolso oculto mantêm suas coisas seguras. Design humanizado: capuz ajustável e removível e punho ajustável para evitar o vento e a água, para um ajuste confortável. O design removível 3 em 1 oferece mais conveniência, você pode separar o casaco e o interior conforme necessário ou usá-los juntos. É adequado para diferentes estações e ajuda você a se adaptar a diferentes climas",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "avaliação": {
        "taxa": 2,6,
        "contagem": 235
      }
    },
    {
      "id": 16,
      "título": "Jaqueta de motociclista de couro sintético com capuz removível Lock and Love para mulheres",
      "preço": 29,95,
      "description": "100% POLIURETANO (casco), 100% POLIÉSTER (forro), 75% POLIÉSTER, 25% ALGODÃO (SUÉTER), Material de couro sintético para estilo e conforto / 2 bolsos na frente, Jaqueta de couro sintético estilo jeans com capuz 2 em 1, Detalhe de botão na cintura / Costura detalhada nas laterais, LAVAR SOMENTE À MÃO / NÃO USAR ALVEJANTE / SECAR NO VARÃO / NÃO PASSAR",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "avaliação": {
        "taxa": 2,9,
        "contagem": 340
      }
    },
    {
      "id": 17,
      "title": "Casaco de chuva feminino corta-vento listrado capas de chuva de escalada",
      "preço": 39,99,
      "description": "Leve, perfeito para viagens ou uso casual --- Manga longa com capuz, design de cintura com cordão ajustável. Capa de chuva com fecho frontal de botão e zíper, totalmente listrada, forrada e com 2 bolsos laterais, tem um bom tamanho para guardar todos os tipos de coisas, cobre os quadris e o capuz é generoso, mas não exagerado. O capuz forrado de algodão com cordões ajustáveis ​​dá a ele uma aparência realmente estilosa.",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "avaliação": {
        "taxa": 3,8,
        "contagem": 679
      }
    },
    {
      "id": 18,
      "título": "MBJ Feminino Sólido Manga Curta Gola Canoa V ",
      "preço": 9,85,
      "description": "95% RAYON 5% SPANDEX, feito nos EUA ou importado, não usar alvejante, tecido leve com ótima elasticidade para maior conforto, canelado nas mangas e no decote / costura dupla na bainha inferior",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "avaliação": {
        "taxa": 4,7,
        "contagem": 130
      }
    },
    {
      "id": 19,
      "título": "Opna Women's Manga Curta Moisture",
      "preço": 7,95,
      "description": "100% poliéster, lavagem à máquina, intertravamento 100% poliéster catiônico, lavagem à máquina e pré-encolhimento para um ótimo ajuste, leve, espaçoso e altamente respirável com tecido que absorve a umidade e ajuda a mantê-la longe, tecido leve e macio com gola V confortável e um ajuste mais fino, proporciona uma silhueta elegante e mais feminina e maior conforto",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "avaliação": {
        "taxa": 4,5,
        "contagem": 146
      }
    },
    {
      "id": 20,
      "title": "Camiseta feminina DANVOUY casual de algodão curta",
      "preço": 12,99,
      "description": "95% algodão, 5% elastano, Características: casual, manga curta, estampa de letras, gola em V, camisetas da moda, o tecido é macio e tem alguma elasticidade., Ocasião: casual/escritório/praia/escola/casa/rua. Estação: primavera, verão, outono, inverno.",
      "categoria": "roupas femininas",
      "imagem": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "avaliação": {
        "taxa": 3,6,
        "contagem": 145
      }
    }
  ]