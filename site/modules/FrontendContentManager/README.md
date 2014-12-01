## frontend add page
~~~~
$fcm = $modules->get('FrontendContentManager');
        
$form = $fcm->createForm($parent);

if ($fcm->formProcess()) {
    $newPage = $fcm->add($parent);

    // Manipulate page object from outside...
    $newPage->name = $newPage->id . '-' . $sanitizer->pageName($newPage->title);

    $fcm->save();

    $this->session->redirect($newPage->url);
}
else { 
    echo $form->render();
}
~~~~

## frontend edit page
~~~~
$fcm = $modules->get('FrontendContentManager');

$editPage = $pages->get('/mypage');        

$form = $fcm->createForm($editPage);

if ($fcm->formProcess()) {
    $pageObj = $fcm->edit($editPage);

    // Manipulate page object outside...
    $pageObj->name = $pageObj->id . '-' . $sanitizer->pageName($pageObj->title);

    $fcm->save();

    $this->session->redirect($pageObj->url);
}
else {
    echo $form->render();
}
~~~~