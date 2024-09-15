# Desenvolvimento de Interfaces Web

## Feedback Lab 1

Olá! Excelente trabalho!

Alguns pontos a melhorar:

1. Alterar o título da Página, desta forma o utilizador consegue identificar a página nas tabs abertas e no histórico.

```html
<head>
    <title>Document</title>
</head>
````

```html
<head>
    <title>Denivaldo DIW</title>
</head>
````

2. Falta fechar um elemento parágrafo

```html
<p>Como os Endereços IP Funcionam com Páginas da Web?
```

3. Utilizar listas

```html
<p> (...) Como o GeoTraceroute
        funciona? 1. Execução do Traceroute: O GeoTraceroute inicia uma execução do comando traceroute para rastrear o
        caminho dos pacotes de dados até o destino. 2. Coleta de Dados Geográficos: Para cada salto identificado pelo
        traceroute, o GeoTraceroute coleta informações de geolocalização. Esses dados podem incluir a cidade, o país e o
        provedor de serviços de internet (ISP) associado a cada ponto. 3. Visualização no Mapa: Os resultados são então
        apresentados em um mapa interativo, mostrando a localização geográfica de cada salto ao longo do caminho dos
        pacotes. Isso ajuda a visualizar a rota e identificar onde podem ocorrer problemas ou atrasos. ### Por que o
        GeoTraceroute é importante? - **Diagnóstico de Problemas: O GeoTraceroute pode ajudar a identificar onde ocorrem
        problemas na rede, como alta latência ou perdas de pacotes, e fornecer informações sobre a localização
        geográfica dos pontos problemáticos. - Otimização de Rede: Entender o caminho dos dados e as localizações
        geográficas pode ajudar a melhorar o roteamento e a infraestrutura da rede, melhorando a eficiência e a
        velocidade de conexão. - Análise de Desempenho: Ele permite a análise do desempenho da rede, ajudando a detectar
        possíveis gargalos e entender como a distância física entre pontos relacionados ao desempenho. </p>
```

[w3 schools html list](https://www.w3schools.com/html/html_lists.asp)

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 
```