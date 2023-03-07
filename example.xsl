<?xml version = "1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="geo_feature">
	<html>
		<head><title>Geo Feature</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
			<style type="text/css">
				body {background-color: black; color: white; font-family: helevica}
			</style>
		</head>
		<body>
			<h2> Islands </h2>
			<table>
				<xsl:apply-templates/>
			</table>
		</body>
	</html>
</xsl:template>

<xsl:template match="archipelago">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>

<xsl:template match="a_name">
	<td>
		<xsl:apply-templates/>
	</td>
</xsl:template>
<xsl:template match="island">
	<td>
		<xsl:apply-templates/>
	</td>
</xsl:template>

</xsl:stylesheet>