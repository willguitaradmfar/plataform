<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="UTF-8"/>
<xsl:output method="html"/>
<xsl:template match="/">
<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
   
    <div class="wrapper">
      <div class="container">
        </div><!-- row -->
        <div class="row">
          <div class="col-lg-12">
            <div class="logotipo"> 
              <div class="logo">
                <h1><strong>jOmOw</strong></h1>
              </div>
            </div>
          </div>
        </div><!-- row -->
        <div class="row">
        <div class="row">
          <div class="col-lg-12">
            <h2><strong> Desenvolvendo</strong></h2>
          </div>
          <div class="col-lg-12">
            
                <h1><strong><xsl:value-of select="modelos/nome"/></strong></h1>
             
          </div>
        </div><!-- row -->
        <div class="row">
          <div class="col-lg-12">
          <div class="fb-logotipo"> 
             <div id="fb-root">
                <div class="fb-like-box" data-href="https://www.facebook.com/pages/Jomow/406211176192406?fr" data-colorscheme="dark" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>                
             </div>
             </div>
          </div>
        </div><!-- row -->
      </div><!-- container -->
    </div><!-- Wrapper -->

</xsl:template>
</xsl:stylesheet>