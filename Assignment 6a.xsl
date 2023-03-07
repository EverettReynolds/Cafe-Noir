<?xml version = "1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="order_information">
<html>
		<head><title>Order Database</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
			<style type="text/css">
				body {background-color: black; color: white; font-family: helevica}
			</style>
		</head>
		<body>
			<h1> Orders </h1>
			<table>
				<xsl:apply-templates/>
			</table>
		</body>
	</html>
</xsl:template>
<xsl:template match="listorders">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template><xsl:template match="listorders">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="region">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="country">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="type">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="channel">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="priority">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="date">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="id">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="Sdate">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="sold">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="price">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
<xsl:template match="cost">
	<tr>
		<xsl:apply-templates/>
	</tr>
</xsl:template>
</xsl:stylesheet>