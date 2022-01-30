<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">
    <xsl:output method="html" doctype-public="XSLT-compat" omit-xml-declaration="yes" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <hmtl>
        	<head>
				<title>Library</title>
				<style>
					td {
						border: 1px solid #000;
						padding: 5px;
					}
				</style>
			</head>
			<body>
				<table>
					<tr>
						<th>ID</th>
						<th>Название</th>
						<th>Автор</th>
						<th>Редакция</th>
						<th>Копий</th>
						<th>Выдано</th>
						<th>Стеллаж</th>
					</tr>
					<xsl:apply-templates />
				</table>
			</body>
		</hmtl>
	</xsl:template>

    <xsl:template match="BOOK">
		<tr>
			<td><xsl:value-of select="ID" /></td>
			<td><xsl:value-of select="NAME" /></td>
			<td><xsl:value-of select="AUTHOR" /></td>
			<td><xsl:value-of select="REDACTION" /></td>
			<td><xsl:value-of select="COPIES" /></td>
			<td><xsl:value-of select="ISSUED" /></td>
			<td>
				<table>
					<tr>
                        <th>Номер стеллажа</th>
						<th>Жанр</th>
						<th>Тематика</th>
					</tr>
					<xsl:apply-templates select="RACK" />
				</table>
			</td>
		</tr>
	</xsl:template>

	<xsl:template match="RACK">
		<tr>
			<td><xsl:value-of select="NUM" /></td>
			<td><xsl:value-of select="GENRE" /></td>
			<td><xsl:value-of select="TOPIC" /></td>
		</tr>
	</xsl:template>
</xsl:transform>