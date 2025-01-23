$(function(){

    function boxAlerta(mensagem){
        var box_alerta = $('.alerta');
        box_alerta.innerHTML = '';
        $('.alerta').css('display','block');
        $('.alerta').html(mensagem);
    }

    function campoVazio(elemento){
        if(elemento == ''){
            boxAlerta('Não é permitido campos vazios.')
            return true;
        }
    }
      
    function validarCPF(cpf){
        cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf.length !== 11 || /^\d{11}$/.test(cpf) && new Set(cpf).size === 1) {
                return false;
            }

            let soma = 0;
            let resto;

            for (let i = 1; i <= 9; i++) {
                soma += parseInt(cpf[i - 1]) * (11 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpf[9])) {
                return false;
            }

            soma = 0;
            for (let i = 1; i <= 10; i++) {
                soma += parseInt(cpf[i - 1]) * (12 - i);
            }
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) {
                resto = 0;
            }
            if (resto !== parseInt(cpf[10])) {
                return false;
            }

        return true;
    }

    $('#maior18').click(function(){

        $('.voltarMenu').css('display','none');
        $('.verificaDadosMenor').css('display','none');
        $('.verificaDadosMaior').css('display','block');
        $('button').removeClass('selected');
        $(this).addClass('selected');
        $('form').html(
            `
            <div class="travaMenu" style="display:none;"></div>
            <div class="alerta" style="display: none;"></div>
            <div id="form-de-maior">
                <div class="w50">
                    <h3>Seu Nome</h3>
                    <input type="text" name="nome_pessoa" id="nome_pessoa" placeholder="Nome...">    
                </div>
                <div class="w50">
                    <h3>Seu Sobrenome</h3>        
                    <input type="text" name="sobrenome_pessoa" id="sobrenome_pessoa" placeholder="Sobrenome...">    
                </div>
                <div class="quebra"></div>
                <div class="w50">
                    <h3>Data de Nascimento</h3>        
                    <input type="date" name="nascimento_pessoa" id="nascimento_pessoa">    
                </div>
                <div class="w50">
                    <h3>Seu Telefone</h3>        
                    <input type="text" name="telefone_pessoa" id="telefone_pessoa" placeholder="Ex: (21)99999-9999">    
                </div>
                <div class="quebra"></div>
                <h3>Seu E-mail</h3>        
                <input type="email" name="email_pessoa" id="email_pessoa" placeholder="Ex: fulano.de.tal@gmail.com">
                <div class="quebra"></div>
                <h3>Telefones Emergenciais</h3>
                <div class="w50">
                    <h4>Telefone 1</h4>
                    <input type="text" name="telefone_emergencial_pessoa" id="telefone_emergencial_pessoa" placeholder="Ex: (21)99999-9999">
                </div>
                <div class="w50">
                    <h4>Telefone 2 (Opcional)</h4>
                    <input type="text" name="telefone_emergencial_pessoa2" id="telefone_emergencial_pessoa2" placeholder="Ex: (21)99999-9999">
                </div>
                <div class="quebra"></div>
            </div>
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="https://inscricao-otac.vercel.app/sucesso.html">
                <input type="hidden" name="_cc" value="izael.social@tutamail.com">
                <input type="hidden" name="_subject" value="O.T.A.C: Inscrição!">
                <input type="hidden" name="_template" value="table">

            <div class="buttonEnviar">
                <div></div>
            </div>
            `
        );
        $('[name=telefone_emergencial_pessoa]').mask('(99)99999-9999');
        $('[name=telefone_emergencial_pessoa2]').mask('(99)99999-9999');
        $('[name=telefone_pessoa]').mask('(99)99999-9999');
        $('#form-de-menor').remove();
        $('form input[type=submit]').css('display','block');

    })
    $('#menor18').click(function(){

        $('.voltarMenu').css('display','none');
        $('.verificaDadosMenor').css('display','block');
        $('.verificaDadosMaior').css('display','none');
        $('form input[type=submit]').css('display','block');
        $('button').removeClass('selected');
        $(this).addClass('selected');
        $('#form-de-maior').remove();
        $('form').html(
            `
            <div class="travaMenu" style="display:none;"></div>
            <div class="alerta" style="display: none;"></div>
            
            <div id="form-de-menor">
                <div class="w50">
                    <h3>Nome do Inscrito</h3>
                    <input type="text" name="nome_inscrito" id="nome_inscrito" placeholder="Nome do Inscrito...">    
                </div>
                <div class="w50">
                    <h3>Sobrenome do Inscrito</h3>
                    <input type="text" name="sobrenome_inscrito" id="sobrenome_inscrito" placeholder="Sobrenome do Inscrito...">    
                </div>
                <div class="quebra"></div>
                <div class="w50">
                        <h3>Nome do Responsável</h3>
                        <input type="text" name="nome_responsavel" id="nome_responsavel" placeholder="Nome do Responsável...">      
                </div>
                <div class="w50">
                    <h3>Sobrenome do Responsável</h3>
                    <input type="text" name="sobrenome_responsavel" id="sobrenome_responsavel" placeholder="Sobrenome do Responsável...">      
                </div>
                <div class="w50">
                    <h3>CPF do Resp.</h3>
                    <input type="text" name="cpf_responsavel" id="cpf_responsavel" placeholder="Ex: 999.999.999-99">    
                </div>
                <div class="w50">
                    <h3>Telefone do Resp.</h3>
                    <input type="text" name="telefone_responsavel" id="telefone_responsavel" placeholder="Ex: (21)99999-9999">
                </div>    
                <div class="quebra"></div>
            </div>
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="https://inscricao-otac.vercel.app/sucesso.html">
                <input type="hidden" name="_cc" value="izael.social@tutamail.com">
                <input type="hidden" name="_subject" value="O.T.A.C: Inscrição!">
                <input type="hidden" name="_template" value="table">
                <div class="buttonEnviar">
                    <div></div>
                </div>

        `
        );
        $('[name=telefone_responsavel]').mask('(99)99999-9999');
       
        $('[name=cpf_responsavel]').mask('999.999.999-99');

    })

    $('.verificaDadosMenor').click(function(e){
        var enviar = true;

        //Validação Número de Responsável
        var telefoneResponsavel = String(window.document.getElementById('telefone_responsavel').value);
        if(campoVazio(telefoneResponsavel)){
            campoVazio(telefoneResponsavel);
            enviar = false;
        }else if(telefoneResponsavel.length != 14){
            boxAlerta('Insira um número de telefone válido.');
            enviar = false;
        }else{
            enviar = true;
        }

        //Validação de CPF
        const cpf = window.document.getElementById('cpf_responsavel').value;
        const resultadocpf = validarCPF(cpf);
        if(!resultadocpf){
            boxAlerta('Insira um CPF Válido.');
            enviar = false;
        }

        //Validação Nome Responsável
        var nomeResponsavel = String(window.document.getElementById('nome_responsavel').value);
        if(campoVazio(nomeResponsavel)){
            campoVazio(nomeResponsavel);
            enviar = false;
        }else{
            if((nomeResponsavel[nomeResponsavel.length - 1]) === ' ' || nomeResponsavel[0] === ' '){
                enviar = true;
            }else if(nomeResponsavel.includes(' ')){
                boxAlerta('Insira apenas seu primeiro nome.');
                enviar = false;
            }    
        }

        //Validação Sobrenome Responsável
        var sobrenomeResponsavel = String(window.document.getElementById('sobrenome_responsavel').value);
        if(campoVazio(sobrenomeResponsavel)){
            campoVazio(sobrenomeResponsavel);
            enviar = false;
        }else{
            if((sobrenomeResponsavel[sobrenomeResponsavel.length - 1]) === ' ' || sobrenomeResponsavel[0] === ' '){
                enviar = true;
            }else if(sobrenomeResponsavel.includes(' ')){
                boxAlerta('Insira apenas seu sobrenome ou último nome.');
                enviar = false;
            }    
        }

        //Validação Nome Inscrito
        var nomeInscrito = String(window.document.getElementById('nome_inscrito').value);
        if(campoVazio(nomeInscrito)){
            campoVazio(nomeInscrito);
            enviar = false;
        }else{
            if((nomeInscrito[nomeInscrito.length - 1]) === ' ' || nomeInscrito[0] === ' '){
                enviar = true;
            }else if(nomeInscrito.includes(' ')){
                boxAlerta('Insira apenas seu primeiro nome.');
                enviar = false;
            }    
        }

        //Validação SobreNome Inscrito
        
        var sobrenomeInscrito = String(window.document.getElementById('sobrenome_inscrito').value);
        if(campoVazio(sobrenomeInscrito)){
            campoVazio(sobrenomeInscrito);
            enviar = false;
        }else{
            if((sobrenomeInscrito[sobrenomeInscrito.length - 1]) === ' ' || sobrenomeInscrito[0] === ' '){
                enviar = true;
            }else if(sobrenomeInscrito.includes(' ')){
                boxAlerta('Insira apenas seu sobrenome ou último nome.');
                enviar = false;
            }    
        }

        if(enviar == true){
            $('.verificaDadosMenor').css('display','none');
            $('.voltarMenu').css('display','block');
            $('.travaMenu').css('display','block');
            $('.alerta').css('display','none');
            $('.forms form .buttonEnviar').html(`
                <h4>DADOS CONFEREM!</h4>
                <input type="submit" value="REALIZAR INSCRIÇÃO!">`);
        }
        
        $('.voltarMenu').click(function(){
            $('.verificaDadosMenor').css('display','block');
            $('.verificaDadosMaior').css('display','none');
            $('.voltarMenu').css('display','none');
            $('.travaMenu').css('display','none');
            $('.forms form .buttonEnviar').html(`
                <div></div>
            `);
        });

    })

    $('.verificaDadosMaior').click(function(e){
        var enviar = true;
        
        //Validação de E-mail
        const email = String(window.document.getElementById('email_pessoa').value);
        function validarEmail(email) {
            // Expressão regular para verificar o formato do email
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
        if(validarEmail(email)){
            enviar = true;
        }else{
            boxAlerta('Insira um e-mail válido.');
            enviar = false;
        };

        //Validação Nome
        const nomePessoa = String(window.document.getElementById('nome_pessoa').value);
        if(campoVazio(nomePessoa)){
            campoVazio(nomePessoa);
            enviar = false;
        }else{
            if((nomePessoa[nomePessoa.length - 1]) == ' ' || nomePessoa[0] == ' '){
                enviar = true;
            }else if(nomePessoa.includes(' ')){
                boxAlerta('Insira apenas seu primeiro nome.');
                enviar = false;
            }    
        }

        //Validação Sobrenome
        const sobrenomePessoa = String(window.document.getElementById('sobrenome_pessoa').value);
        if(campoVazio(sobrenomePessoa)){
            campoVazio(sobrenomePessoa);
            enviar = false;
        }else{
            if((sobrenomePessoa[sobrenomePessoa.length - 1]) === ' ' || sobrenomePessoa[0] === ' '){
                enviar = true;
            }else if(sobrenomePessoa.includes(' ')){
                boxAlerta('Insira apenas seu sobrenome ou último nome.');
                enviar = false;
            }    
        }
        
        //Validação de Idade
        
        const getData = new Date();
        const anoAtual = getData.getFullYear();  
        const boxIdade = window.document.getElementById('nascimento_pessoa');
        const boxIdadeValor = boxIdade.value;
        const anoIdadeValor = boxIdadeValor.split('-')[0];
        const idade = anoAtual - anoIdadeValor;
        if(campoVazio(boxIdadeValor)){
            campoVazio(boxIdadeValor);
            enviar = false;
        }else{
            if(idade < 18 || idade > 70){
                boxAlerta('Você não está na idade permitida.');
                enviar = false; 
            }else{
                enviar = enviar;
            }
        }
        
        //Validação de Telefone
        
        var telefone = window.document.getElementById('telefone_pessoa').value;
        var telefoneEmergencial1 = window.document.getElementById('telefone_emergencial_pessoa').value;
        var telefoneEmergencial2 = window.document.getElementById('telefone_emergencial_pessoa2').value;
        //var telefoneResponsavel = window.document.getElementById('telefone_responsavel').value;
        if(campoVazio(telefone) || campoVazio(telefoneEmergencial1)){
            campoVazio(telefone);
            enviar = false;
        }else{
            if(telefone.length != 14 || telefoneEmergencial1.length != 14){
                boxAlerta('Insira um número de telefone válido.');
                enviar = false;
            }else{
                enviar = enviar;
            }
        }

        
        if(enviar == true){
            $('.verificaDadosMaior').css('display','none');
            $('.voltarMenu').css('display','block');
            $('.travaMenu').css('display','block');
            $('.alerta').css('display','none');
            $('.forms form .buttonEnviar').html(`
                <h4>DADOS CONFEREM!</h4>
                <input type="submit" value="REALIZAR INSCRIÇÃO!">
            `);
        }
        
        $('.voltarMenu').click(function(){
            $('.verificaDadosMaior').css('display','block');
            $('.verificaDadosMenor').css('display','none');
            $('.voltarMenu').css('display','none');
            $('.travaMenu').css('display','none');
            $('.forms form .buttonEnviar').html(`
                <div></div>
            `);
        });

    })

    

    }
)
