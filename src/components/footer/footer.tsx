import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Image from 'next/image'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box sx={{ width: { xs: '100%', md: "100%" }, mb: { xs: 3, md: 0 } }} justifyContent={'flex'} textAlign={'center'}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                <Box>
                  <Image src="/LogoWhite.svg" width={200} height={60} alt="Hero img" />
                </Box>
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                Algorooms is an automated platform that has been operating since 2023 until now.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid> */}
          <Grid item xs={12} md={12} mt={5}>
            <Typography variant="h6" justifyContent={'flex'} textAlign={'center'}>
              Terms & Condtions
            </Typography>
            <Typography variant="subtitle2" justifyContent={'flex'} textAlign={'center'}>
              Acceptance of Terms These Terms and Conditions ("Terms") govern your use of the Algorooms automated
              platform. By accessing or using the Platform, you agree to comply with and be bound by these
              Terms.  <br></br>
              <br></br>
              Definitions "User" refers to any person or entity that accesses or uses the Platform. "Content"
              includes any information, data, text, software, graphics, or other materials made available on the
              Platform. "Services" refers to the features and functionality provided by the Platform. 
              <br></br>
              <br></br>
               Use of the Platform 
              <br></br>
               a. You must be at least 16 years old to use the Platform.
               <br></br>
               b. You agree to provide accurate, current, and complete information when using the Platform.
               <br></br>
                c. You are responsible for maintaining the
              confidentiality of your account and password and for restricting access to your computer or other device.
              <br></br>
              <br></br>
               Intellectual Property 
              <br></br>
              a. All content and materials on the Platform, including but not limited to text,
              graphics, logos, icons, images, and software, are the property of Algorooms and are protected by copyright
              and other intellectual property laws. 
              <br></br>
              b. You may not use, copy, reproduce, distribute, or modify any
              content from the Platform without prior written consent from Algorooms.
              <br></br>
              <br></br>
              Platform may collect and use your personal information. By using the Platform, you consent to such data
              collection and usage.
              <br></br>
              <br></br>
                User Conduct 
              <br></br>
              a. You agree not to engage in any activity that may disrupt or
              interfere with the proper functioning of the Platform. 
              <br></br>
              b. You may not use the Platform to engage in any
              illegal or unauthorized activities. 
              <br></br>
               You may not upload or distribute any content that is defamatory,
              obscene, or harmful to others. 
              <br></br>
              <br></br>
              Disclaimers 
              <br></br>
              a. The Platform is provided "as is" without any warranties.
              b. Algorooms is not responsible for any errors or omissions on the Platform. 
              <br></br>
              c. Algorooms does not
              guarantee the accuracy, reliability, or completeness of the content on the Platform.
              <br></br> <br></br>
               Limitation of
              Liability Algorooms and its affiliates are not liable for any direct, indirect, incidental, special, or
              consequential damages that may arise from your use of the Platform or inability to use it.
              <br></br> <br></br> 
               Termination
              Algorooms reserves the right to terminate or suspend your access to the Platform at its discretion.
              <br></br> <br></br>
              
              
               If you have any questions or concerns about these Terms, please contact us
              at support@algorooms.com.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
