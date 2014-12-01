Process Language Translator Plus
================================

- Version: 1.0.1
- Release State: beta
- requires: ProcessLanguageTranslator

Same like **Language Translator Modul**. You will get a drop-down list to select translatable files instead of text field.  
path: [/admin/setup/language-translator/add/](#stay)


### How to Install
- load up module to directory: [/site/modules/ProcessLanguageTranslatorPlus/](#stay)
- go to *Modules > Check for new modules*
  install Module Language Translator Plus (headline: Process)
- Done!

#### Do not uninstall the original **LanguageTranslator** in the Module settings, it is **required**!

### Settings (developers info)
- If language specified as a GET var in the URL, the Module will pick it up and use it (will be stored in session),
- else if there exists a session var (translateLanguageID) this will be used,
- else as default-setting the language of logged-in user will be used.  
  change Language with GET Parameter like:  
  [admin/setup/language-translator/add/?language_id=1022](#stay)  
- process and status of page language-translator changes with installation

### Use
If you are in the Language Translator [/admin/setup/language-translator/](#stay) you can see a List of Files which are already translated (in the set language).    
Click Button **Translate New File** to reach the Translate File Selector [/admin/setup/language-translator/add](#stay).  
Select a not yet translated file from the list.  
Click the Button below to create a translation file and go directly to the Editor.  
Via the Language-Switcher you can easily switch to the Translator of another Language. 

![Module Screenshot](http://processwire.com/talk/index.php?app=core&module=attach&section=attach&attach_rel_module=post&attach_id=1825)

### Roadmap
- providing a Button in the Language Translator to download a zipped Language-Pack created from the current Edition. 
- output of further Information (translation files without original, duplikates)

### Updates
- 21.10.13 install/ uninstall routine added/ change of process in page language-translator not necessary anymore 
- 08.11.13 fixed bug in function __switchlang() undefined variable 
- 08.11.13 fixed bug in function init() Error: Unknown/invalid language session->translateLanguageID has to be set 
- 08.11.13 install routine changes status of page 'language translator' to visible

### Bug Report
If you try to install the module from the modules manager without having module Language-Support installed you will get the following php-error:
*Error: Class 'ProcessLanguageTranslator' not found*

